function openMenu() {
  $('#wrapper').addClass('open');
  $('#sections_menu').addClass('open');
}

function closeMenu() {
  $('#wrapper').removeClass('open');
  $('#sections_menu').removeClass('open');
}

function toggleMenu(){
  $('#wrapper').toggleClass('open');
  $('#sections_menu').toggleClass('open');
}

$('#hamburger').on('click', function(){
  toggleMenu();
});

$('#canvas').on('focus', function(){
  closeMenu();
});

$('#canvas').droppable({
  drop: function(event, ui) {
    var el = ui.draggable[0];

    el.removeAttribute('style');
    ui.helper.removeClass('waat-editor-dragging');
  },
  greedy: true
});

$('#canvas').sortable({
  appendTo: document.body,
  start: function(event, ui) {
    $('#destroyObject').addClass('show');
    // ui.helper.addClass('waat-editor-dragging');
  },
  stop: function(event, ui) {
    $('#destroyObject').removeClass('show');
  }
});

$('.submenu li').each(function(index, el){
  $(el).draggable({
    appendTo: '#canvas',
    connectToSortable: '#canvas',
    helper: function(){
    // should create/render new "component" based on object data and drop into canvas
    // todo: create the 'render' function to build "component"
    
      var section = document.createElement('section');
      var container = document.createElement('div');
      var h2 = document.createElement('h2');

      h2.innerHTML += this.innerHTML;

      container.classList.add('container');
      container.appendChild(h2);

      section.appendChild(container);
      return section;
    },
    revert: 'invalid',
    scope: 'canvas',
    start: function(event, ui) {
      ui.helper.addClass('waat-editor-dragging');
      ui.helper[0].removeAttribute('style');
    },
    stop: function(event, ui) {
      ui.helper.removeClass('waat-editor-dragging');
      ui.helper[0].removeAttribute('style');
    }
  });
});

$('#destroyObject').droppable({
  hoverClass: 'hover',
  drop: function(event, ui) {
    $(ui.draggable).remove();
  },
  greedy: true,
  tolerance: 'pointer'
});