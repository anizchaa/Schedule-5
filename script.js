var field = [
  'State',
  'District',
  'Municipality',
  'City',
  'Ward',
  'PostBox',
  'Contact',
]

function update(same) {
  if (same.checked == true) {
    field.forEach((item) => {
      ipitem = document.getElementById('ip' + item)
      ititem = document.getElementById('it' + item)
      ititem.value = ipitem.value
    })
  }
}
