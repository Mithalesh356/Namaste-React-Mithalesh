class A {
    private int a;
    private int b;

    void set(int x, int y) {
        a = x;
        b = y;
    }

    void get() {
        System.out.println(a);
        System.out.println(b);
    }
}

public class Demo {
    public static void main(String[] args) {
        A obj = new A();
        obj.set(5, 6);
        obj.get();
    }
}