$(function() {

  $('.modal').modal({
    inDuration: 150,
    outDuration: 150
  })
  
  $('.collapsible-header').collapsible({
    accordion: true,
    onOpen: function(el) { 
      const $icon = $(el).children().children('i')
      return $icon.text('arrow_drop_up')
    },
    onClose: (el) => { 
      const $icon = $(el).children().children('i')
      return $icon.text('arrow_drop_down')
    }  
  })

  function reportToHTML(report) {
    return `
      <p>${report.treatment}</p>
      <br>
    `
  }

  $('.pathology-name').on('click', function(e) {
    e.preventDefault()
    const pathoId = $(this).attr('data-patho')
    $(`.report-${pathoId}`).sideNav()
  })
  
})