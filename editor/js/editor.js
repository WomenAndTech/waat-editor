function closeMenu() {
  $('#wrapper').removeClass('slide');
  $('#sections_menu').removeClass('slide');
}

function toggleMenu(){
  $('#wrapper').toggleClass('slide');
  $('#sections_menu').toggleClass('slide');
}

$('#hamburger').on('click', function(){
  toggleMenu();
});

$('#canvas').on('focus', function(){
  closeMenu();
});

$('.submenu li').each(
  function(index, el){
    $(el).draggable({
      appendTo: '#canvas',
      connectToSortable: '#canvas',
      // helper: 'clone',
      helper: function(){
      // should create/render new "component" based on object data and drop into canvas
      // todo: create the 'render' function to build "component"

        var section = document.createElement('section');
        var h2 = document.createElement('h2');


        h2.innerHTML += 'hello';
        section.appendChild(h2);
        return section;
      },
      revert: 'invalid',
      scope: 'canvas',
    });
  }
);

$('#canvas').droppable({
  drop: function(event, ui) {
    // var el = $(ui.draggable[0]);
    // var handle = document.createElement('h2');

    // handle.innerHTML += 'Hello';

    // el.prepend(handle);

    // el.draggable({
    //   handle: 'h2.handle'
    // });
    

    
    closeMenu();
  },
  greedy: true
});

$('#canvas').sortable({
  opacity: 0.7
});