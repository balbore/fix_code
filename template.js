let app = new Vue({
    el: "#app",
    data: {
        fixText: "",
        fixedText: "",
        times: 0,
        array: "",
        omitChar: "",
        
    },
    methods: {
        timesText: function () {
            var fixingText = ""
            var copyedFixingText = this.fixText
            var a = ""

            for (let i = 0; i < this.times; i++) {
                a = copyedFixingText
                while (a.match(/🆔/)) {
                    a = a.replace("🆔", `${i}`)
                }
                fixingText += a + "\n"
            }
            this.fixedText = fixingText
        },

        timesTextOnArray: function () {
            var fixArray = this.array.split(',')
            var fixingText = ""
            var copyedFixingText = this.fixText
            var a = ""

            for (let i = 0; i < fixArray.length; i++) {
                a = copyedFixingText
                while (a.match(/🆔/)) {
                    a = a.replace("🆔", `${i}`)
                }
                while (a.match(/🅰️/)) {
                    a = a.replace("🅰️", `${fixArray[i]}`)
                    a = a.replace("\n", "")
                }


                // 省く文字のところの処理
                reg = new RegExp(`${this.omitChar}`)
                if (this.omitChar !== "") {
                    while (a.match(reg)) {
                        a = a.replace(`${this.omitChar}`, "")
                        a = a.replace("\n", "")
                    }
                }
                

                fixingText += a + "\n"
            }
            this.fixedText = fixingText
        },

        addVarI: function () {
            //以下、カーソル位置の取得コード
            // 対象の要素を取得
            var target = document.getElementById("fixTextArea")
            // カーソル位置を取得
            var pos = target.selectionStart

            this.fixText = this.fixText.slice(0, pos) + "🆔" + this.fixText.slice(pos)
        },
        addVarArray: function () {
            //以下、カーソル位置の取得コード
            // 対象の要素を取得
            var target = document.getElementById("fixTextArea")
            // カーソル位置を取得
            var pos = target.selectionStart

            this.fixText = this.fixText.slice(0, pos) + "🅰️" + this.fixText.slice(pos)
        },
        

        
    },
})