<template>
  <div class="container" v-cloak>
    <div class="column">
      <app-form @added-section="addedData"/>

      <div class="card card-w70">
        <app-content
          v-if="resume.length > 0"
          :resume="resume"
        />

        <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
      </div>
    </div>

    <div>
      <app-loader v-if="loading"/>
      <app-comments
        :base-comment="baseComment"
        @load="loadComments"
      />
    </div>
  </div>
</template>

<script>
import AppForm from './components/AppForm'
import AppContent from './components/AppContent'
import AppComments from './components/AppComments'
import AppLoader from './components/AppLoader'
import axios from 'axios'

export default {
  data () {
    return {
      dataBase: 'https://test-ee7bc-default-rtdb.europe-west1.firebasedatabase.app/resume.json',
      resume: [],
      baseComment: [],
      loading: false
    }
  },
  methods: {
    async addedData (info) {
      await fetch(this.dataBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: info.id,
          typeBlock: info.typeBlock,
          valueBlock: info.valueBlock
        })
      })

      this.resume.push({
        typeBlock: info.typeBlock,
        valueBlock: info.valueBlock
      })
    },
    async loadResume () {
      try {
        const { data } = await axios.get(this.dataBase)

        if (!data) {
          throw new Error('Резюме пустое, добавьте данные о себе')
        }

        this.resume = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
      } catch (e) {
      }
    },
    async loadComments () {
      this.loading = true
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
      this.baseComment = await response.json()
      this.loading = false
    }
  },
  mounted () {
    this.loadResume()
  },
  components: {
    AppForm,
    AppContent,
    AppComments,
    AppLoader
  }
}
</script>
