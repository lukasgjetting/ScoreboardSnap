/*
tracking.ColorTracker.registerColor('drake', function(r, g, b) {
  if ((r > 20 && r < 50) && (g > 20 && g < 35) && (b > 5 && b < 15)) {
    return true;
  }
  return false;
});

tracking.ColorTracker.registerColor('green', function(r, g, b) {
  if (r == 5 && g == 13 && b == 11) {
    return true;
  }
  return false;
});
*/

tracking.ColorTracker.registerColor('white', function(r, g, b) {
  if (g < 30 && r < g && b < g && r < b) {
    return true;
  }
  return false;
});


var colors = new tracking.ColorTracker(['white']);


colors.on('track', function(event) {
    if (event.data.length === 0) {
        // No colors were detected in this frame.
        console.log("none");
    } else {
        event.data.forEach(function(rect) {
            console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
            plotRectangle(document.querySelector('video'), rect);
        });
    }
});

tracking.track('video', colors);

function plotRectangle(el, rect) {
      var e = jQuery(el);
      var div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.border = '2px solid ' + (rect.color || 'orange');
      div.style.width = rect.width + 'px';
      div.style.height = rect.height + 'px';
      div.style.left = e.offset().left + rect.x + 'px';
      div.style.top = e.offset().top + rect.y + 'px';
      div.style.zIndex = "9999";
      document.body.appendChild(div);
    
      setTimeout(function(){
          jQuery(div).remove();
      }, 500);

      return div;
 }