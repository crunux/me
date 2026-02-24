import type { Data } from "@nuxtjs/mdc";




export const useBlog = () => {



    const getPosts = async () => {
        const query = gql`
        query getPosts {
            posts {
            createdAt
            id
            slug
            tittle
            image {
                url(
                transformation: {
                    document: { output: { format: png } }
                    image: { resize: { width: 350, height: 300, fit: crop } }
                }
                )
            }
            }
        }
        `;

        try{
            const { data, error, refresh } = await useAsyncQuery<Data>(query);
            
            return { data, error, refresh };
        } catch (error) {
            console.error(error);
            // addToast({
            //     title: "Error",
            //     description: "Failed to fetch posts",
            //     type: "error",
            // });
            return { data: null, error, refresh: null };
        }

    }
    
    return {
        getPosts
    }
}