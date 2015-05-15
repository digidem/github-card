(function (window, $) {
  function urlQuery (field) {
    field = field.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
    var expr = '[\\?&]' + field + '=([^&#]*)'
    var regex = new RegExp(expr)
    var results = regex.exec(window.location.href)
    return results === null ? undefined : decodeURIComponent(results[1])
  }

  if (window.location === window.parent.location) {
    window.location.replace(/^.*\//.exec(window.location.href)[0] + 'get-embed-code.html')
  }

  $(function () {
    var repo = urlQuery('repo')
    var title = urlQuery('title')
    var link = urlQuery('link')

    $.get('https://api.github.com/repos/' + repo).success(function (data) {
      $('.card-suptitle a').attr('href', data.html_url)
      $('.card-title a').text(title || data.name).attr('href', link || data.html_url)
      $('.fork a').text(data.forks_count).attr('href', data.html_url + '/fork')
      $('.star a').text(data.stargazers_count).attr('href', data.html_utl + '/stargazers')
      $('.card').removeClass('hidden')
    })
  })
}(this, $))
