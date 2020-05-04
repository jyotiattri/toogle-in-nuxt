export default function ({ $featureToggle }) {
  console.log($featureToggle)
  $featureToggle.isQueryStringAllowed(props => true)
}
