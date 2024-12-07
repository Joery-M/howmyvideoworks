mod utils;

use std::mem::MaybeUninit;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet(num: u32) {
    log(&format!("Hello there!, {}", &num));
}
