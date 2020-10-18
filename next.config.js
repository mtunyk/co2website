module.exports = {
  poweredByHeader: false,
  // generateEtags: false,
  generateBuildId: async () => (
    require('child_process')
      .execSync('git rev-parse --short HEAD')
      .toString()
      .trim()
  ),
}
