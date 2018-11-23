<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input :placeholder="$t('table.apiName')" v-model="listQuery.apiName" style="width: 250px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-input :placeholder="$t('table.requestPath')" v-model="listQuery.requestPath" style="width: 250px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.attributionGateway" :placeholder="$t('table.attributionGateway')" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in attributionGatewayOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="listQuery.requestMethod" :placeholder="$t('table.requestMethod')" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in requestMethodOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="listQuery.effectiveState" :placeholder="$t('table.effectiveState')" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in effectiveStateOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="listQuery.publishState" :placeholder="$t('table.publishState')" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in publishStateOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <!--<el-select v-model="listQuery.importance" :placeholder="$t('table.importance')" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="listQuery.type" :placeholder="$t('table.type')" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key"/>
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
      </el-select>-->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" style="float: right;" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
      <el-button class="filter-item" style="float: right;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('table.addAPI') }}</el-button>
      <!--<el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">{{ $t('table.reviewer') }}</el-checkbox>-->
    </div>

    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange">
      <el-table-column :label="$t('table.apiName')" width="190px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.apiName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.requestPath')" width="190px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.requestPath }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.attributionGateway')" width="178px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributionGateway }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.requestMethod')" width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.requestMethod }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.effectiveState')" width="80px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.effectiveState }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.publishState')" width="80px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.publishState }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.createTime')" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <!--<el-table-column :label="$t('table.title')" min-width="150px">
        <template slot-scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.title }}</span>
          <el-tag>{{ scope.row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.author')" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showReviewer" :label="$t('table.reviewer')" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.importance')" width="80px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon"/>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.readings')" align="center" width="95">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" @click="handleFetchPv(scope.row.pageviews)">{{ scope.row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" class-name="status-col" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>-->
      <el-table-column :label="$t('table.actions')" align="center" width="160" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="default" size="mini" @click="jumpApiControl">{{ $t('table.control') }}</el-button>
          <el-button type="default" size="mini">{{ $t('table.more') }}</el-button>
          <!--<el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">{{ $t('table.publish') }}
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row,'draft')">{{ $t('table.draft') }}
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">{{ $t('table.delete') }}
          </el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="110px" style="width: 550px; margin-left:50px;">
        <el-form-item :label="$t('table.gatewayName')" prop="gatewayName">
          <el-input v-model="temp.gatewayName"/>
          <div>
            <svg-icon icon-class="guide" />
            <span style="color: #8b8b8b; fontStyle:normal; fontWeight:bold; fontFamily:sans-serif; fontSize:15">{{ $t('table.gatewayNameMessage') }}</span>
          </div>
        </el-form-item>
        <el-form-item :label="$t('table.describe')">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.describe" type="textarea" placeholder="请输入"/>
        </el-form-item>
        <el-form-item :label="$t('table.serviceSource')" prop="serviceSource">
          <el-select v-model="temp.serviceSource" class="filter-item" placeholder="请选择后端服务源">
            <el-option v-for="item in serviceSourceOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
          </el-select>
          <div>
            <svg-icon icon-class="guide" />
            <span style="color: #8b8b8b; fontStyle:normal; fontWeight:bold; fontFamily:sans-serif; fontSize:15">{{ $t('table.serviceSourceMessage') }}</span>
          </div>
        </el-form-item>
        <el-form-item :label="$t('table.serviceMode')" prop="serviceMode">
          <el-select v-model="temp.serviceMode" class="filter-item" placeholder="请选择服务实现方式">
            <el-option v-for="item in serviceModeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
          </el-select>
          <div>
            <svg-icon icon-class="guide" />
            <span style="color: #8b8b8b; fontStyle:normal; fontWeight:bold; fontFamily:sans-serif; fontSize:15">{{ $t('table.serviceModeMessage') }}</span>
          </div>
        </el-form-item>
        <el-form-item :label="$t('table.accessAgreement')" prop="accessAgreement">
          <el-select v-model="temp.accessAgreement" class="filter-item" placeholder="请选择协议">
            <el-option v-for="item in accessAgreementOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
          </el-select>
          <div>
            <svg-icon icon-class="guide" />
            <span style="color: #8b8b8b; fontStyle:normal; fontWeight:bold; fontFamily:sans-serif; fontSize:15">{{ $t('table.accessAgreementMessage') }}</span>
          </div>
        </el-form-item>
        <el-form-item :label="$t('table.urlPrefix')" prop="urlPrefix">
          <el-input v-model="temp.urlPrefix"/>
          <div>
            <svg-icon icon-class="guide" />
            <span style="color: #8b8b8b; fontStyle:normal; fontWeight:bold; fontFamily:sans-serif; fontSize:15">{{ $t('table.urlPrefixMessage') }}</span>
          </div>
        </el-form-item>
        <!--<el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date"/>
        </el-form-item>
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="temp.title"/>
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;"/>
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="Please input"/>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel"/>
        <el-table-column prop="pv" label="Pv"/>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{ $t('table.confirm') }}</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // Waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

const serviceSourceOptions = [
  { key: 'proxy', display_name: '代理' },
  { key: 'instance', display_name: '实例' }
]

const serviceModeOptions = [
  { key: 'restful', display_name: 'Restful' },
  { key: 'webservice', display_name: 'WebService' }
]

const accessAgreementOptions = [
  { key: 'http', display_name: 'HTTP' },
  { key: 'https', display_name: 'HTTPS' }
]

// arr to obj ,such as { proxy : "代理", instance : "实例" }
const serviceSourceKeyValue = serviceSourceOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

// arr to obj ,such as { restful : "Restful", webservice : "WebService" }
const serviceModeKeyValue = serviceModeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

// arr to obj ,such as { http : "HTTP", https : "HTTPS" }
const accessAgreementKeyValue = accessAgreementOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    serviceSourceFilter(type) {
      return serviceSourceKeyValue[type]
    },
    serviceModeFilter(type) {
      return serviceModeKeyValue[type]
    },
    accessAgreementFilter(type) {
      return accessAgreementKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      attributionGatewayOptions: ['渠道A', '渠道B', '渠道C'],
      requestMethodOptions: ['GET', 'POST'],
      effectiveStateOptions: ['有效', '无效'],
      publishStateOptions: ['编辑', '发布', '下线'],
      serviceSourceOptions,
      serviceModeOptions,
      accessAgreementOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        gatewayName: '',
        describe: '',
        serviceSource: '',
        serviceMode: '',
        accessAgreement: '',
        urlPrefix: '',
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑渠道',
        create: '新建渠道'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }],
        gatewayName: [{ required: true, message: '渠道名称不可以为空!', trigger: 'blur' }],
        serviceSource: [{ required: true, message: '后端服务源不可以为空!', trigger: 'blur' }],
        serviceMode: [{ required: true, message: '服务实现方式不可以为空!', trigger: 'blur' }],
        accessAgreement: [{ required: true, message: '访问协议不可以为空!', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    jumpApiControl() {
      /**
       * this.$router.push({ path: '/cart?goodsId=12' })*/
      this.$router.push({ path: '/apiControl/apiGroupTable' })
    }
  }
}
</script>
