import Lista from "../structures/Lista";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("Inicialização",
    () => {
        expect(l.isEmpty()).toBe(true);
    }
);

test("Adicionar elementos",
    () => {
        l.add("A");
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(1);
        l.removeFirst();
        expect(l.isEmpty()).toBe(true);
        expect(l.length()).toBe(0);
    }
);

test("Remover elementos da lista Vazia",
    () => {
        expect(() => l.removeFirst()).toThrow(Error("Underflow"));
        expect(() => l.removeLast()).toThrow(Error("Underflow"));

    }
);

test("Testes Diversos",
    () => {
        l.add(20);
        l.add(30);
        l.add(40);
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(3);
        l.append(50);
        expect(l.length()).toBe(4);
        expect(l.asArray()).toStrictEqual([40, 30, 20, 50]);
        l.removeFirst();
        l.removeLast();
        expect(l.asArray()).toStrictEqual([30, 20]);
        expect(l.length()).toBe(2);
    }
);

// test("Limpar lista",
//     () => {
//         l.add(10);
//         l.clear();
//         expect(l.isEmpty()).toBe(true);
//     }
// );

test("Buscar dado na lista", 
    () => {
        l.add("A");
        l.add("B");
        l.add("C");
        l.add("D");
        expect(l.search("C")).toBe(2);
        expect(l.search("F")).toBe(-1);
})

test("Adicionar em uma posição", () => {
    l.add(10);
    l.append(20);
    l.append(30);
    l.addAt(25, 3);
    expect(l.asArray()).toStrictEqual([10, 20, 25, 30]);
})

test("Busca por dado", () => {
    l.add(10);
    l.append(20);
    l.append(30);
    l.append(40);
    l.append(50);
    expect(l.searchIndex(3)).toBe(30);
    expect(l.search(30)).toBe(3);
})