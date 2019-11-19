class Tools {
    position(nowEle) {
        let l = 0;
        let t = 0;
        let cl = nowEle.clientLeft;
        let ct = nowEle.clientTop;
        while (nowEle) {
            l += (nowEle.offsetLeft + nowEle.clientLeft);
            t += (nowEle.offsetTop + nowEle.clientTop);
            nowEle = nowEle.offsetParent;
        }
        l = l - cl;
        t = t - ct;
        return {
            l,
            t
        }
    }
}