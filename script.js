
    function openTab(tabName) {
        // Hide all tabs
        var tabs = document.getElementsByClassName('tab-content');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }

        // Show the selected tab
        document.getElementById(tabName).style.display = 'block';
    }
