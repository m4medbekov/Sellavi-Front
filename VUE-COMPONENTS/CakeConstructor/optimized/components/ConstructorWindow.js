document.addEventListener('DOMContentLoaded', () => {
  return (Vue.component('constructor-window', {
    props: ['selectedProperties'],
    methods: {
    },
    template: `
                <div class="constructor__window">
                    <h3 class="constructor__window-tile" v-if="selectedProperties.tires < 1 || !selectedProperties['taste1'] || !selectedProperties['filling1']">Тут появится ваш торт!</h3>
                    <h3 class="constructor__window-tile window-title--opened" v-else>Примерно так будет выглядеть ваш торт)</h3>
                    <div class="constructor__cake"  v-if="selectedProperties.tires > 0 && selectedProperties['taste1'] && selectedProperties['filling1']">
                        <div :class="'constructor__cake-top top--'+selectedProperties.tires" v-if="selectedProperties['taste'+selectedProperties.tires] && selectedProperties['filling'+selectedProperties.tires]">
                            <div class="constructor__cake-berries cake-berries--strawberry" v-if="selectedProperties['berries'].includes('Клубника')" ></div>  
                            <div class="constructor__cake-berries cake-berries--blackberry" v-if="selectedProperties['berries'].includes('Ежевика')"></div>
                            <div class="constructor__cake-berries cake-berries--raspberry" v-if="selectedProperties['berries'].includes('Малина')"></div>
                            <div class="constructor__cake-berries cake-berries--blueberry" v-if="selectedProperties['berries'].includes('Голубика')"></div>
                        </div>
                        <div v-else class="constructor__cake-top top--disabled"></div>
                        <ul v-for="number in selectedProperties.tires" :class="'constructor__cake-tire cake-tire--'+number" v-if="selectedProperties['taste'+number] && selectedProperties['filling'+number]">
                            <div class="constructor__cake-decor cake-topping--chocolate" v-if="selectedProperties['decor'].includes('Шоколадная стружка')"></div>
                            <div class="constructor__cake-decor cake-topping--cookies" v-if="selectedProperties['decor'].includes('Фигурное печенье')"></div>
                            <div class="constructor__cake-decor cake-topping--marshmello" v-if="selectedProperties['decor'].includes('Маршмеллоу')"></div>
                            <div class="constructor__cake-decor cake-topping--merengue" v-if="selectedProperties['decor'].includes('Безе')"></div>
                            
                            
                            <div class="constructor__cake-topping cake-topping--white" v-if="selectedProperties['topping'] === 'Белый соус'" ></div>  
                            <div class="constructor__cake-topping cake-topping--caramel" v-if="selectedProperties['topping'] === 'Карамельный сироп'"></div>  
                            <div class="constructor__cake-topping cake-topping--maple" v-if="selectedProperties['topping'] === 'Кленовый сироп'"></div>  
                        
                        
                            <div class="constructor__cake-topping cake-topping--white" v-if="selectedProperties['topping'] === 'Белый соус'" ></div>  
                            <div class="constructor__cake-topping cake-topping--caramel" v-if="selectedProperties['topping'] === 'Карамельный сироп'"></div>  
                            <div class="constructor__cake-topping cake-topping--maple" v-if="selectedProperties['topping'] === 'Кленовый сироп'"></div>  
                        
                            <div class="constructor__cake-cover cake-cover--white" v-if="selectedProperties['cover'] === 'Белый крем'" ></div>  
                            <div class="constructor__cake-cover cake-cover--chococream" v-if="selectedProperties['cover'] === 'Шоколадный крем'"></div>  
                            <div class="constructor__cake-cover cake-cover--cheese" v-if="selectedProperties['cover'] === 'Крем-чиз'"></div>  
                            <li v-for="layer in 4">
                                <div v-if="selectedProperties['taste'+number] === 'Шоколад'" class="constructor__cake-layer cake-layer--chocolate"></div>
                                <div v-else-if="selectedProperties['taste'+number] === 'Ваниль'" class="constructor__cake-layer cake-layer--vanilla"></div>
                                <div v-else-if="selectedProperties['taste'+number] === 'Мраморный'" class="constructor__cake-layer cake-layer--marble"></div>
                                <div v-else-if="selectedProperties['taste'+number] === 'Медовый'" class="constructor__cake-layer cake-layer--honey"></div>
                                
                                <div v-if="selectedProperties['filling'+number] === 'Белый крем'" class="constructor__cake-layer cake-layer--white"></div>
                                <div v-else-if="selectedProperties['filling'+number] === 'Шоколадный крем'" class="constructor__cake-layer cake-layer--chococream"></div>
                                <div v-else-if="selectedProperties['filling'+number] === 'Крем-чиз'" class="constructor__cake-layer cake-layer--cheese"></div>
                            </li>
                            <li>
                                <div v-if="selectedProperties['taste'+number] === 'Шоколад'" class="constructor__cake-layer cake-layer--chocolate"></div>
                                <div v-else-if="selectedProperties['taste'+number] === 'Ваниль'" class="constructor__cake-layer cake-layer--vanilla"></div>
                                <div v-else-if="selectedProperties['taste'+number] === 'Мраморный'" class="constructor__cake-layer cake-layer--marble"></div>
                                <div v-else-if="selectedProperties['taste'+number] === 'Медовый'" class="constructor__cake-layer cake-layer--honey"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            `
  }))
});


