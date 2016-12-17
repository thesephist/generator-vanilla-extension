// viewModel

var <%= camelcase %> = {

    // store view state here
    // state: viewStateValue,

    // elements
    el: {

    },

    // events
    ev: {

    },

    // functions
    f: {
        render: function() {
            // render extension based on viewModel settings
        },

        getSettings: function(callback) {
            chrome.storage.sync.get({
                // settings
            }, record => {
                // operations on settings
                // optionally save settings here to this viewModel

                if (callback) callback();
            });

            return {
                // settings saved to viewModel
            };
        },

        setSettings: function(callback) {
            chrome.storage.sync.set({
                // settings from viewModel
            }, function(){

            }.bind(this));

            if (callback) callback();
        },

        sendMessage: function(message) {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, tabs => {
                chrome.tabs.sendMessage(tabs[0].id, message);
            });
        }
    }

};

<%= camelcase %>.init = function() {

    // add event listeners
    Object.keys(<%= camelcase %>.ev).forEach(function(identifier) {
        var eventName = identifier.split(" ")[0],
            selector = identifier.split(" ").splice(1).join(" "),
            fn = <%= camelcase %>.f[<%= camelcase %>.ev[identifier]].bind(<%= camelcase %>.f);

        <%= camelcase %>Utils.eventAdder(selector, eventName, fn);
    });

    // read and apply settings -- render is being weird
    <%= camelcase %>.f.getSettings(<%= camelcase %>.f.render.bind(<%= camelcase %>.f));
    setTimeout(<%= camelcase %>.f.render.bind(<%= camelcase %>.f), 10);

    <%= camelcase %>.f.setDomainName();

    console.info("<%= camelcase %> initialized");

};

<%= camelcase %>.init();
