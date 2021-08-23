<template>
  <div class="p-3 flex items-center justify-between">
      <div class="flex items-center">
          <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button" name="button">
              <img src="logoPinterest.png" alt="logo" class="object-cover h-6 w-6">
          </button>
          <button v-for="item in tabItems" @click="selectedTab = item.key" :key="item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark hover:bg-light'} rounded-full py-3 px-5 font-semibold`" type="button" name="button">
              {{item.name}}
          </button> 
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            tabItems: [
                    {name: 'Home', key: 'home'},
                    {name: 'Today', key: 'today'}
            ],
            selectedTab: 'Home'
        }
    }
}
</script>

<style>

</style>