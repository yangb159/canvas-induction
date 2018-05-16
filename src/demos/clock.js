export default class clock {
    constructor(opts) {
        if(!(this instanceof clock)) {
            return new clock(opts)
        }
        this.setDefault(opts);
    }
    setDefault(opts) {
        let defaults = {
            width: 500,
            height: 500,
            hasSec: true,
            secLineWidth: 2,
            minLineWidth: 3,
            houLineWidth: 5,
            tickWidth: 5,
            tickHeight: 8,
            globalLineWidth: 6
        };
        let _opts = Object.assign({}, defaults, opts || {});
        this.extend(this, _opts)

    }
    setBasic() {
        let {width, height} = this;
        this.origin = Math.floor(Math.max(width, height) / 2);
        this.originX = width - this.origin;
        this.originY = height - this.origin;
        this.globalRadius = this.origin - 20 || 10;
    }
    extend(target, source) {
        Object.keys(source).forEach(key => {
            target[key] = source[key]
        })
    }
    _draw
}