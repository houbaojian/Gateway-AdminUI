<template>
  <div class="dashboard-editor-container">

    <!--<github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/>-->
    <!--<panel-group @handleSetLineChartData="handleSetLineChartData"/>-->
    <panel-group/>
    <!--<el-row :gutter="8">
      <panel-group @handleSetLineChartData="handleSetLineChartData"/>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:280px;height:330px;padding:16px 16px 0;margin-bottom:32px;">
        <control-alarm-complex-table/>
      </el-col>
    </el-row>-->

    <!--<el-row style="background:#fff;width:450px;height:380px;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"/>
    </el-row>

    <el-row style="background:#fff;width:450px;height:380px;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart2 :chart-data="lineChartData2"/>
    </el-row>-->

    <el-row :gutter="450">
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
        <div style="background:#fff;width:410px;height:350px;padding:16px 16px 0;margin-bottom:32px;">
          <line-chart :chart-data="lineChartData"/>
        </div>
      </el-col>
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
        <div style="background:#fff;width:410px;height:350px;padding:16px 16px 0;margin-bottom:32px;">
          <line-chart2 :chart-data="lineChartData2"/>
        </div>
      </el-col>
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
        <div style="background:#fff;width:197px;height:350px;padding:0px 0px 0;margin-bottom:32px;">
          <control-alarm-complex-table/>
        </div>
      </el-col>
      <!--<el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:420px;height:380px;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData"/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:420px;height:380px;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart2 :chart-data="lineChartData2"/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:260px;height:380px;padding:16px 16px 0;margin-bottom:32px;">
        <control-alarm-complex-table/>
      </el-col>-->
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:550px;height:330px;padding:16px 16px 0;margin-bottom:32px;">
        <complex-table/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:550px;height:330px;padding:16px 16px 0;margin-bottom:32px;">
        <net-gate-complex-table/>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:550px;height:330px;padding:16px 16px 0;margin-bottom:32px;">
        <zoo-keeper-complex-table/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="background:#fff;width:550px;height:330px;padding:16px 16px 0;margin-bottom:32px;">
        <control-center-complex-table/>
      </el-col>
    </el-row>

    <!--<el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card/>
      </el-col>
    </el-row>-->

  </div>
</template>

<script>
/**
 * import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'*/
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import LineChart2 from './components/LineChart2'
import ComplexTable from './components/ComplexTable'
import NetGateComplexTable from './components/NetGateComplexTable'
import ZooKeeperComplexTable from './components/ZooKeeperComplexTable'
import ControlCenterComplexTable from './components/ControlCenterComplexTable'
import ControlAlarmComplexTable from './components/ControlAlarmComplexTable'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

const lineChartData2 = {
  newVisitis: {
    expectedData: [180, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    /**
     * GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard*/
    PanelGroup,
    LineChart,
    LineChart2,
    ComplexTable,
    NetGateComplexTable,
    ZooKeeperComplexTable,
    ControlCenterComplexTable,
    ControlAlarmComplexTable
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      lineChartData2: lineChartData2.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    handleSetLineChartData2(type) {
      this.lineChartData2 = lineChartData2[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
