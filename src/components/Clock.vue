<template>
    <div id="clock">
        <div id="d0">
            <div v-for="digit in digitOrder" :key="digit">
                <span v-if="digit.toString() === time[0][0].toString()" :class="'d' + digit + ' active'">{{ digit }}</span>
                <span v-else :class="'d' + digit">{{ digit }}</span>
            </div>
        </div>
        <div id="d1">
            <div v-for="digit in digitOrder" :key="digit">
                <span v-if="digit.toString() === time[0][1].toString()" :class="'d' + digit + ' active'">{{ digit }}</span>
                <span v-else :class="'d' + digit">{{ digit }}</span>
            </div>
        </div>
        <div class="cathode active">:</div>
        <div id="d2">
            <div v-for="digit in digitOrder" :key="digit">
                <span v-if="digit.toString() === time[1][0].toString()" :class="'d' + digit + ' active'">{{ digit }}</span>
                <span v-else :class="'d' + digit">{{ digit }}</span>
            </div>
        </div>
        <div id="d3">
            <div v-for="digit in digitOrder" :key="digit">
                <span v-if="digit.toString() === time[1][1].toString()" :class="'d' + digit + ' active'">{{ digit }}</span>
                <span v-else :class="'d' + digit">{{ digit }}</span>
            </div>
        </div>
        <div class="cathode active">:</div>
        <div id="d4">
            <div v-for="digit in digitOrder" :key="digit">
                <span v-if="digit.toString() === time[2][0].toString()" :class="'d' + digit + ' active'">{{ digit }}</span>
                <span v-else :class="'d' + digit">{{ digit }}</span>
            </div>
        </div>
        <div id="d5">
            <div v-for="digit in digitOrder" :key="digit">
                <span v-if="digit.toString() === time[2][1].toString()" :class="'d' + digit + ' active'">{{ digit }}</span>
                <span v-else :class="'d' + digit">{{ digit }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Clock from '../assets/Clock';

let c = new Clock();

export default {
    name: 'Clock',
    data() {
        return {
            digitOrder: [6, 7, 5, 8, 4, 3, 9, 2, 0, 1],
            time: c.updateTime()
        }
    },
    methods: {
        startTime: function() {
            setInterval(() => {
                this.time = c.updateTime();
            }, 500);
        }
    },
    created: function() {
        this.startTime()
    }
}
</script>


<style scoped>
#clock {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 4em;
}

#d0, #d1, #d2, #d3, #d4, #d5, #d6, #d7, #d8, #d9 {
    position: relative;
}
.d0, .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9 {
    color: #222222;
    position: absolute;
    top: 0;
    left: 0;
    width: 1em; 
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    text-align: center;
    opacity: 0.5;
}

.cathode {
    width: 1em;
    text-align: center;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

/* For z-indexing: order goes 6 7 5 8 4 3 9 2 0 1 */
.d6 {
    z-index: 999;
}
.d7 {
    z-index: 998;
}
.d5 {
    z-index: 997;
}
.d8 {
    z-index: 996;
}
.d4 {
    z-index: 995;
}
.d3 {
    z-index: 994;
}
.d9 {
    z-index: 993;
}
.d2 {
    z-index: 992;
}
.d0 {
    z-index: 991;
}
.d1 {
    z-index: 990;
}

/* When the digit is illuminated */
.active {
    color: orange;
    opacity: 1;
    text-shadow: 0 0 1px orange, 0 0 3px orange, 0 0 12px red; 
}


</style>
