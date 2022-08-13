<template>
    <div class="misc-wrapper">
        <b-link class="brand-logo">
            <img src="/images/_/_/_/_/plenti/resources/js/src/assets/images/logo/plenti_logo_dark.png" alt="logo"
                class="" style="width: 100px" />
        </b-link>

        <div class="misc-inner p-2 p-sm-3">
            <div class="w-100 text-center">
                <h2 class="mb-1">
                    Congratulation! 🔐
                </h2>
                <p class="mb-2">
                    App cache as been updated
                </p>
                <b-img fluid :src="imgUrl" alt="Not authorized page" />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable global-require */
import axios from "axios";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import store from '@/store/index'
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { onMounted } from "@vue/composition-api";
import { $themeConfig } from "@themeConfig";


export default {
    components: {
        BLink,
        BImg,
        BButton,
        VuexyLogo,
    },
    computed: {
        imgUrl() {
            if (store.state.appConfig.layout.skin === 'dark') {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
                return this.downImg
            }
            return this.downImg
        },
    },
    setup() {
        const { baseURL } = $themeConfig.app;
        onMounted(() => {
            axios
                .get(baseURL + "/app/get-settings")
                .then((response) => {
                    setDoc(
                        doc(db, "app", "app-settings"),
                        response.data.data
                    );                 
                })
                .catch((errors) => {
                    console.log(errors);
                });
        });

    }
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-misc.scss';
</style>
