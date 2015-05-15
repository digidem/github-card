$(function () {
  var embedUrlBase = /^.*\//.exec(window.location.href)[0]
  var $embedCode = $('#embedCode')
    .focus(function () {
      $(this).select()
    })
    .mouseup(function (e) { e.preventDefault() })
  var $iFrame = $('iframe').attr('src', embedUrlBase + '?repo=digidem/github-card&title=Github Card')
  var $repo = $('#inputRepo').focusout(updateEmbedCode)
  var $title = $('#inputTitle').focusout(updateEmbedCode)
  var $link = $('#inputLink').focusout(updateEmbedCode)

  function updateEmbedCode () {
    var repo = $repo.val()
    var title = $title.val()
    var link = $link.val()
    var embedUrl = embedUrlBase + '?repo=' + repo
    if (title) embedUrl += '&title=' + title
    if (link) embedUrl += '&link=' + link
    var embedCode = '<iframe width="300px" height="155px" frameBorder="0" ' +
                    'src="' + embedUrl + '"></iframe>'
    $iFrame.attr('src', embedUrl)
    $embedCode.text(embedCode)
  }
})
