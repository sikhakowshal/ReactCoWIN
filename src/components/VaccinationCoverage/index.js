import {BarChart, Legend, Bar, XAxis, YAxis} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverage} = props
  const vaccinationData = vaccinationCoverage.map(item => ({
    dose1: item.dose_1,
    dose2: item.dose_2,
    vaccineDate: item.vaccine_date,
  }))

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-container">
      <h1 className="coverage-title">Vaccination Coverage</h1>
      <BarChart
        data={vaccinationData}
        margin={{top: 20, right: 10}}
        width={1000}
        height={300}
      >
        <XAxis
          tick={{stroke: '#94a3b8', strokeWidth: 1}}
          dataKey="vaccineDate"
        />
        <YAxis
          tick={{stroke: '#94a3b8', strokeWidth: 0}}
          tickFormatter={DataFormatter}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="30%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="30%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
