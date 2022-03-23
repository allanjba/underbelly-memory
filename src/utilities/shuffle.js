const shuffle = () => {
    const assets = [
        { image: '/assets/belly/allan.jpeg' },
        { image: '/assets/belly/brad.jpeg' },
        { image: '/assets/belly/devin.jpeg' },
        { image: '/assets/belly/emily.jpeg' },
        { image: '/assets/belly/caitlin2.jpeg' },
        { image: '/assets/belly/mackayla.jpeg' },
        { image: '/assets/belly/zach.jpeg' },
        { image: '/assets/belly/martin.jpeg' },
        { image: '/assets/belly/tony.jpeg' },
        { image: '/assets/belly/taylor.jpeg' },
        { image: '/assets/belly/michelle.jpeg' },
        { image: '/assets/belly/jordan.jpeg' },

    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;