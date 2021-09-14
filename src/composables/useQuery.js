import { request as fetchGQL } from "graphql-request";
import { inject, ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
export function useQuery(query){
    let results = ref([]);
    const info = inject("info");
    const route = useRoute();
    // esta funcionalidad sera reutilizada en las demas vistas.
    watchEffect(()=> {
        fetchGQL("https://rickandmortyapi.com/graphql", 
            /*GraphQL*/ 
            query,
            // el valor con el que el watchEffect funcionara
            {
                page: parseInt(route.params.page),
            }
        ).then(({data})=>{
            results.value = data.results;
            info.value = data.info;
        });
    });

    return {
        results,
    }
}