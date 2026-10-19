// 1. Listă cu numele orașelor
export const getOrase = (list) => list.map((d) => d.oras)

// 2. Destinațiile nevizitate
export const getNevizitate = (list) => list.filter((d) => !d.vizitat)

// 3. Suma totală a zilelor
export const totalZile = (list) => list.reduce((sum, d) => sum + d.zile, 0)

// 4. Formatarea unei singure destinații într-un rând de text
export const formatDestinatie = ({ oras, tara, zile, vizitat }) => {
    const status = vizitat ? '[x]' : '[ ]';
    return `${status} ${oras}, România (${zile} zile)`.replace('România', tara);
}

// 5. Numărul de destinații pe fiecare țară (returnează un obiect)
export const numarPeTara = (list) => {
    return list.reduce((acc, { tara }) => {
        return { ...acc, [tara]: (acc[tara] ?? 0) + 1 };
    }, {});
}

// 6. Sortarea descrescătoare după zile (fără a strica lista originală, folosind o copie [...list])
export const sortDupaZile = (list) => {
    return [...list].sort((a, b) => b.zile - a.zile);
}

// 1. Schimbă starea 'vizitat' pentru ID-ul dat, returnând o listă nouă
export const marcheazaVizitat = (list, id) => {
    return list.map((d) => d.id === id ? { ...d, vizitat: !d.vizitat } : d);
}

// 2. Adaugă o destinație nouă la final, folosind spread operator pe listă
export const adaugaDestinatie = (list, d) => {
    return [...list, d];
}

// 3. Șterge o destinație după ID folosind filter
export const stergeDestinatie = (list, id) => {
    return list.filter((d) => d.id !== id);
}