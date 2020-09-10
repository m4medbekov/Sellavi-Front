document.addEventListener('DOMContentLoaded', () => {
    return (Vue.component('check-list', {
        props: ['name', 'title', 'options'],
        methods: {
            addFeatures(event, name){
                this.$emit('add-features', event, name);
            },
        },
        template: `
                <div class="constructor__checklist">
                    <h3 class="constructor__checklist-title constructor__checklist-title--berries" v-if="title === 'ягоды для украшения'">Выбери {{title}}</h3>
                    <h3 class="constructor__checklist-title constructor__checklist-title--decor" v-else>Выбери {{title}}</h3>
                    <div class="constructor__checklist-group">
                        <label class="constructor__checklist-box" v-for="option of options">
                            <span class="constructor__description">{{option}}</span>
                            <input class="constructor__checkbox" type="checkbox" :value="option" @change="addFeatures($event, name)">
                            <span class="custom-checkbox"></span>
                        </label>
                    </div>
                </div>
            `
    }))
});