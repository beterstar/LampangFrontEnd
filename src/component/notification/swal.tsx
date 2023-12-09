import Swal from 'sweetalert2'
import { colors } from '../../constants/colors'

export function swalSuccess(title?: string, option?: string, url?: any, callback?: any) {
    Swal.fire({
        icon: 'success',
        title: title,
        confirmButtonColor: colors.themeMainColor
    }).then(() => {
        if (option === 'reset') {
        } else if (option === 'reload') {
            window.location.reload()
        } else if (option === 'go') {
            window.location.href = url
        } else if (callback != null) callback(true)
    })
}
export function swalError(title?: string) {
    Swal.fire({
        icon: 'error',
        title: title,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: colors.danger
    })
}
type optionWarning = {
    confirmButtonTheme?: 'default' | 'danger'
    allowOutsideClick?: boolean
    confirmButtonText?: string
}
export function swalWarning(title?: string, text?: any, callback?: any, option?: optionWarning) {
    Swal.fire({
        icon: 'warning',
        title: title,
        html: text,
        confirmButtonText: option?.confirmButtonText || 'ตกลง',
        confirmButtonColor: option?.confirmButtonTheme === 'danger' ? colors.danger : colors.themeMainColor,
        allowOutsideClick: option?.allowOutsideClick || false
    }).then((result) => {
        if (result.isConfirmed && callback) callback()
    })
}

export function swalActive(title?: string, text?: any, callback?: any, icon?: null | 'info' | 'warning' | 'question', confirmButtonText?: string) {
    Swal.fire({
        title: title,
        // text: text,
        html: text,
        icon: icon || 'warning',
        showCloseButton: true,
        showCancelButton: true,
        reverseButtons: true,
        focusConfirm: false,
        confirmButtonText: confirmButtonText || 'ยืนยัน',
        confirmButtonColor: colors.themeMainColor,
        cancelButtonText: 'ยกเลิก',
        customClass: {
            container: 'swal2-warning'
        }
    }).then((confirm) => {
        if (confirm.value) {
            return callback(true)
        }
        return callback(false)
    })
}

type OptionDelete = {
    confirmButtonText?: string
    cancelButtonText?: string
    width?: any
}

export function swalDelete(title: string, text?: any, callback?: any, option?: OptionDelete) {
    Swal.fire({
        title: title,
        html: text,
        icon: 'warning',
        width: option?.width || 'auto',
        showCloseButton: true,
        showCancelButton: true,
        reverseButtons: true,
        focusConfirm: false,
        confirmButtonText: option?.confirmButtonText || 'ยืนยัน',
        confirmButtonColor: colors.themeThirdColor,
        cancelButtonText: option?.cancelButtonText || 'ยกเลิก',
        customClass: {
            container: 'swal2-warning'
        }
    }).then((confirm) => {
        if (confirm.value) {
            return callback(true)
        }
        return callback(false)
    })
}

type optionButton = {
    confirmButton?: {
        showConfirmButton?: boolean
        confirmButtonText?: string
    }
    cancelButton?: {
        showCancelButton?: boolean
        cancelButtonText?: string
    }
    reverseButtons?: boolean
    showCloseButton?: boolean
}

export function swalCustom(title?: string, text?: any, callback?: any, icon?: null | 'info' | 'warning' | 'question', optionButton?: optionButton) {
    Swal.fire({
        title: title,
        html: text,
        icon: icon || 'warning',
        showConfirmButton: optionButton?.confirmButton?.showConfirmButton === false ? false : true,
        showCloseButton: optionButton?.showCloseButton === false ? false : true,
        showCancelButton: optionButton?.cancelButton?.showCancelButton === false ? false : true,
        confirmButtonText: optionButton?.confirmButton?.confirmButtonText || 'ยืนยัน',
        confirmButtonColor: colors.themeMainColor,
        cancelButtonText: optionButton?.cancelButton?.cancelButtonText || 'ยกเลิก',
        reverseButtons: optionButton?.reverseButtons || true,
        focusConfirm: false,
        customClass: {
            container: 'swal2-warning'
        }
    }).then((confirm) => {
        if (confirm.value) {
            return callback(true)
        }
        return callback(false)
    })
}
