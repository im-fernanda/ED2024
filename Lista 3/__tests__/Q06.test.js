import Lista from "../structures/Lista";
import substring from "../src/Q06-substring";

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

test("Remover elementos da lista vazia",
    () => {
        expect(() => l.removeFirst()).toThrow(Error("Underflow"));
        expect(() => l.removeLast()).toThrow(Error("Underflow"));

    }
);

test("Substring", 
    () => {
        l.add("F");
        l.add("E");
        l.add("R");
        l.add("N");
        l.add("A");
        l.add("N");   
        l.add("D");   
        l.add("A");   
        expect(substring(1, 5, l)).toBe("N A N D A ");
    
    }
);
