<template>
    <div class="amap-page-container">
      <el-amap vid="amapDemo"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
      </el-amap>

      <div class="toolbar">
        <button @click="add()">add marker</button>
      </div>
    </div>
</template>

<script>
let amapManager = new VueAMap.AMapManager();
    module.exports = {
      data: function() {
        return {
          zoom: 12,
          center: [121.59996, 31.197646],
          amapManager,
          events: {
            init(o) {
              let marker = new AMap.Marker({
                position: [121.59996, 31.197646]
              });

              marker.setMap(o);
            }
          }
        };
      },

      methods: {
        add() {
          let o = amapManager.getMap();
          let marker = new AMap.Marker({
            position: [121.59996, 31.177646]
          });

          marker.setMap(o);
        }
      }
    };
</script>

<style scoped>
   .amap-demo {
      height: 300px;
    }
</style>
