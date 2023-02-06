import { readFileSync, writeFileSync } from 'node:fs'

export function commit() {
  const coverage = readFileSync('./coverage.txt', 'utf8').split(':')[1].split('\n')[0]
  console.log('🚀 -> coverage', coverage)

  const readme = readFileSync('./README.md', 'utf8')
  const coverageStatus = `Total of coverage: ${coverage}`

  const readmeWithCoverage = readme.replace(/(.*total of coverage .*\n)/, `$1${coverageStatus}\n`)
  console.log('🚀 -> readmeWithCoverage', readmeWithCoverage)
  // const commit = {
  //   message: 'Update coverage badge',
  //   content: readmeWithCoverage
  // }
  try {
    writeFileSync('./README.md', readmeWithCoverage)
  } catch (e) {
    console.log('🚀 -> error', e)
  }

  console.log(commit)
}
commit()
