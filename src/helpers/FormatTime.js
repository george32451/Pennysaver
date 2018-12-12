const FormatTime = (hour, minute) => {
    let h = hour
    if (h < 10) h = '0' + h

    let m = minute
    if (m < 10) m = '0' + m

    return `${h}:${m}`
}
export default FormatTime
