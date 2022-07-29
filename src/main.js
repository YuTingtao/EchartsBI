import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './assets/scss/base/main.scss'
import SvgIcon from './components/svg-icon/index.vue'
import 'virtual:svg-icons-register'

import ECharts from 'vue-echarts'
import { use as EchartsUse } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, MapChart, EffectScatterChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, GeoComponent } from 'echarts/components';

EchartsUse([
    CanvasRenderer,
    BarChart, LineChart, PieChart, MapChart, EffectScatterChart,
    GridComponent, TooltipComponent, LegendComponent, GeoComponent,
])

const app = createApp(App)
app.use(router)
app.use(store)
app.component('svg-icon', SvgIcon)
app.component('echarts', ECharts)
app.mount('#app')
