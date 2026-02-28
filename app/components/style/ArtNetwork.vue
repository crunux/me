
<script setup lang='ts'>
  import type { Fn } from '@vueuse/core';

  const color = ref('#ffffff');
  // const color = '#000000';

  const el = ref<HTMLCanvasElement | null>(null);
  const { random } = Math;
  const size = reactive(useWindowSize());

  const start = ref<Fn>(() => {});
  const stopped = ref(false);

  interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    connections: number;
  }

  const colors = ref(['#ffffff', '#16bbbc', '#ffffff', '#16bbbc', '#ffffff', '#16bbbc']);

  const nodes = ref<Node[]>([]);
  const maxConnections = 3; 
  const connectionDistance = ref(200);
  const nodeCount = 30;

  setInterval(() => {
    color.value = colors.value[Math.floor(Math.random() * colors.value.length)];
    connectionDistance.value = random() * 600;
  }, 2000);

  function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) {
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    // @ts-expect-error vendor
    const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    const dpi = _dpi || dpr / bsr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = dpi * width;
    canvas.height = dpi * height;
    ctx.scale(dpi, dpi);

    return { ctx, dpi };
  }

  function distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  onMounted(async () => {
    const canvas = el.value!;
    const { ctx } = initCanvas(canvas, size.width, size.height);
    const { width, height } = canvas;

    const createNode = (): Node => ({
      x: random() * size.width,
      y: random() * size.height,
      vx: (random() - 0.5) * 0.5,
      vy: (random() - 0.5) * 0.5,
      connections: 0,
    });

    // let controls: ReturnType<typeof useRafFn>;

    const frame = () => {
      ctx.clearRect(0, 0, width, height);

      // Update node positions
      nodes.value.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > size.width) node.vx *= -1;
        if (node.y < 0 || node.y > size.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(20, Math.min(size.width, node.x));
        node.y = Math.max(20, Math.min(size.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = color.value;
      ctx.lineWidth = 1;

      nodes.value.forEach((node1, i) => {
        nodes.value.slice(i + 1).forEach((node2) => {
          const dist = distance(node1.x, node1.y, node2.x, node2.y);

          if (dist < connectionDistance.value) {
            const opacity = 1 - dist / connectionDistance.value;
            ctx.globalAlpha = opacity * 0.5;

            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();

            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw nodes
      ctx.fillStyle = color.value;
      nodes.value.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const controls = useRafFn(frame, { immediate: false });

    start.value = () => {
      controls.pause();
      ctx.clearRect(0, 5, width, height);

      // Initialize nodes
      nodes.value = Array.from({ length: nodeCount }, createNode);

      controls.resume();
      stopped.value = false;
    };

    start.value();
  })

  const mask = computed(() => 'radial-gradient(circle, transparent, black)');
</script>
<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden"
    style="z-index: -1"
    :style="`mask-image: ${mask}; -webkit-mask-image: ${mask}`"
  >
    <canvas ref="el" width="400" height="400" />
  </div>
</template>
<!-- <script setup lang='ts'>
  // import type { Fn } from '@vueuse/core';

  const color = '#88888825';
  const el = ref<HTMLCanvasElement | null>(null);
  const { random } = Math;
  const size = reactive(useWindowSize());

  interface Node {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
  }

  const nodes = ref<Node[]>([]);
  const nodeCount = 40;
  const connectionDistance = 120;
  const repulsionForce = 0.5;
  const attractionForce = 0.01;

  function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) {
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    const bsr = 1;
    const dpi = _dpi || dpr / bsr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = dpi * width;
    canvas.height = dpi * height;
    ctx.scale(dpi, dpi);

    return { ctx };
  }

  function distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  onMounted(() => {
    const canvas = el.value!;
    const { ctx } = initCanvas(canvas, size.width, size.height);

    // Initialize nodes
    nodes.value = Array.from({ length: nodeCount }, () => ({
      x: random() * size.width,
      y: random() * size.height,
      vx: (random() - 0.5) * 2,
      vy: (random() - 0.5) * 2,
      radius: 3,
    }))

    const frame = () => {
      ctx.clearRect(0, 0, size.width, size.height);

      // Physics - repulsion & attraction
      nodes.value.forEach((node1, i) => {
        nodes.value.forEach((node2, j) => {
          if (i === j) return;

          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const dist = distance(node1.x, node1.y, node2.x, node2.y);

          if (dist < connectionDistance && dist > 0) {
            // Attraction
            const force = attractionForce * (dist - connectionDistance / 2);
            node1.vx += (dx / dist) * force;
            node1.vy += (dy / dist) * force;
          }

          if (dist < 50 && dist > 0) {
            // Repulsion
            const force = repulsionForce / (dist * dist);
            node1.vx -= (dx / dist) * force;
            node1.vy -= (dy / dist) * force;
          }
        })

        // Apply velocity with damping
        node1.x += node1.vx;
        node1.y += node1.vy;
        node1.vx *= 0.95;
        node1.vy *= 0.95;

        // Bounce off edges
        if (node1.x < 0 || node1.x > size.width) {
          node1.vx *= -0.8;
          node1.x = Math.max(0, Math.min(size.width, node1.x));
        }
        if (node1.y < 0 || node1.y > size.height) {
          node1.vy *= -0.8;
          node1.y = Math.max(0, Math.min(size.height, node1.y))
        }
      })

      // Draw connections
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      nodes.value.forEach((node1, i) => {
        nodes.value.slice(i + 1).forEach((node2) => {
          const dist = distance(node1.x, node1.y, node2.x, node2.y);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;

            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      ctx.globalAlpha = 1;
      ctx.fillStyle = color;
      nodes.value.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      })
    }

    useRafFn(frame, { immediate: true });
  })

  const mask = computed(() => 'radial-gradient(circle, transparent 20%, black)');
</script>

<template>
  <div
    class="fixed inset-0 pointer-events-none print:hidden"
    style="z-index: -1"
    :style="`mask-image: ${mask}; -webkit-mask-image: ${mask}`"
  >
    <canvas ref="el" width="400" height="400" />
  </div>
</template> -->