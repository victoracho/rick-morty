<template>
    <h1> Characters </h1>
    <ul class="data-list">
        <div v-for="character in characters" :key="character.id">
            <li> <img :src="character.image" alt=""></li>
            <li> {{character.name}}</li>
            <li> {{character.gender}}</li>
            <li> {{character.status}}</li>
        </div>
    </ul>
</template>
<script>
import {useQuery} from "../composables/useQuery";
export default {
    setup(){
        const {results} = useQuery(`
                query($page: Int){
                    data: characters(page: $page) {
                        info{
                            count
                            pages
                            next
                            prev
                        }
                        results {
                            id
                            name
                            gender
                            status
                            image
                        }
                    }
                }
            `);
        return {
            characters: results,
        }
    }
};
</script>

<style scoped>

</style>
