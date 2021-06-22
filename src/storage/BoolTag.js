import { ElementaryTag } from './index.js';
export class BoolTag extends ElementaryTag {
    /**
     * @return {boolean}
     */
    get value() {
        let byte = super.value[0]; // 调用基类确保已加载
        let bit_number = 1 << this.bit_offset;
        return (byte & bit_number) > 0;
    }
    /**
     * 只接受布尔值
     * @param {boolean} value
     */
    set value(value) {
        let byte = super.value[0]; // 调用基类确保已加载
        let bit_number = 1 << this.bit_offset;
        if (value) byte = byte | bit_number;
        else byte = byte & ~bit_number;
        this.buffer[0] = byte;
    }
    constructor({ name = "", type = "BOOL" } = { name: "", type: "BOOL" }) {
        const bytes = 1;
        super({ name, type, bytes });
    }
}
