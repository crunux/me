import type { Posts } from '~/types';

type PostsData = {
  posts: Posts[];
}

export const useBlog = (locale: Ref<string>) => {
    const posts = ref<Posts[]>([]);
    const loading = ref(false);
    const error = ref<Error | null>(null);
  
    const query = gql`
      query GetPosts($locale: [Locale!]!) {
        posts(locales: $locale, orderBy: publishedAt_DESC) {
          date
          excerpt
          id
          readTime
          slug
          tags
          tittle
          publishedAt
          updatedAt
          createdAt
        }
      }
    `;
  
    const variables = computed(() => ({
      locale: [locale.value],
    }));
  
    const { data, error: queryError, refresh } = useAsyncQuery<PostsData>(
      query,
      variables
    );
  
    watch(data, (newData) => {
      posts.value = newData?.posts || [];
      loading.value = false;
    }, { immediate: true });
  
    watch(queryError, (err) => {
      error.value = err ? new Error(err.message) : null;
    });
  
    const setupAutoRefetch = () => {
      loading.value = true;
      
      watch(locale, async () => {
        loading.value = true;
        await refresh();
        nextTick(() => {
          useScrollAnimation();
        });
      });
    }
  
    return {
      posts,
      loading,
      error,
      setupAutoRefetch,
    }
  }