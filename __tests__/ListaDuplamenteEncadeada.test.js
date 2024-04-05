import ListaDuplamenteEncadeada from "../src/ListaDuplamenteEncadeada";

let l;

beforeEach(
    () => {
        l = new ListaDuplamenteEncadeada();
    }
);

test("Incialização",
    () => {
        expect(l.isEmpty()).toBe(true);
    }
);

test("Adicionar e remover elementos",
    () => {
        l.add("A");
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(1);

        l.remove("A");
        expect(l.isEmpty()).toBe(true);
        expect(l.length()).toBe(0);

        l.add("R");
        l.add("E");
        l.add("F");
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(3);
        expect(l.toString()).toEqual("F->E->R");
        l.remove("R");
        expect(l.toString()).toEqual("F->E");

    }
);

test("Remover elementos da lista vazia",
    () => {
        expect(() => l.remove()).toThrow(Error("Underflow"));
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
        l.remove(40);
        l.removeLast();
        expect(l.asArray()).toStrictEqual([30, 20]);
        expect(l.length()).toBe(2);
    }
);