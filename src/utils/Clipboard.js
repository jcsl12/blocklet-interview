import Vue from 'vue';
import Clipboard from '@/utils/Clipboard';

function clipboardSuccess() {
    alert("复制成功")
}

function clipboardError() {
    alert("复制失败")
}

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.destroy()
    })
    clipboard.onClick(event)
}
