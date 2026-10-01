const img = (n) => `${import.meta.env.BASE_URL}images/illu${n}.jpg`;

export const illustrations = [1,2,3,4,5,6].map((n) => ({
    id: `illu-${n}`,
    src: img(n),
    alt: `Illustration ${n}`,
    title: `Image ${n}`,
    description: `This is image ${n}`,
}))