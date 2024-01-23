module alert::alert {
    use sui::event;

    public struct LogAssert has copy, drop {
        error: u64,
    }

    public fun alert(condition: bool, error: u64) {
        if (!condition) {
            event::emit(LogAssert { error });
            assert!(condition, error);
        }
    }
}