import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'DateFilterComponent',
    filters: {
        filtername(value: any) {
            return 'Hello filter'
        }
    }
})
export default class DateFilterComponent extends Vue {
    textToFormat = 'Hello World!'
}