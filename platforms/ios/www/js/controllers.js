
//

angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {

        var div = document.getElementById("map_canvas");

        var map = plugin.google.maps.Map.getMap(div,{
            'backgroundColor': 'white',
            'mapType': plugin.google.maps.MapTypeId.ROADMAP,
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            }
//           , 'gestures': { 'scroll': true, 'tilt': true, 'rotate': true }, ' camera': { 'latLng': new plugin.google.maps.LatLng(41.796875,140.757007), 'tilt': 30, 'zoom': 15, 'bearing': 50 }
        });

        //map.setDialog();


        map.refreshLayout();

        $scope.goToUserLocation = function() {
            map.clear();

            map.moveCamera({
                'zoom': 0,
                'tilt': 0
            });

            map.getMyLocation({
                enableHighAccuracy: true
            }, function(location) {
                map.addMarker({
                    'position': location.latLng,
                    "mytitle": "You're Here"
                }, function(marker) {
                    //marker.on(plugin.google.maps.event.MARKER_CLICK, onMarkerClicked);

                    map.animateCamera({
                        'target': location.latLng,
                        'zoom': 13
//                        'tilt': 80
                    }, function() {
                        setTimeout(function() {
                            // marker.trigger(plugin.google.maps.event.MARKER_CLICK);
                        }, 1500);
                    });
                }, function(error) {
                    alert(error.message);
                });

            });
        }

        $scope.goToUserLocation();

        $scope.getUserLocation = function(){
            //map.setClickable('false');
            //alert('button was clicked')
            console.log('Button was clicked');
        }
    })

    .controller('FriendsCtrl', function($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function($scope) {
    });