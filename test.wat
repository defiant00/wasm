(module
    (import "console" "log" (func $log (param i32 i32)))
    (import "js" "memory" (memory 1))
    (data (i32.const 0) "Hello WASM!")
    (func (export "greet")
        i32.const 0     ;; offset
        i32.const 11    ;; size
        call $log
    )
)