//mixin
export const imageBorder = {

    methods: {
        toggleImageBorder() {
            //after we bind @click to element this function will run and change the style...hopefully
            this.giveMeABorder = !this.giveMeABorder;

        }
    }
}