'use strict';

var dsController = angular.module('dsController', []);

dsController.controller('DsCtrl', ['$scope', '$localStorage', 'characterListService',
    function($scope, $localStorage, characterListService) {
        $scope.showNew = false;

        var loadCharacters = function() {
            $scope.characters = characterListService.getGameCharacterList("ds");
        }

        $scope.saveNewChar = function() {
            if($localStorage.characters.length == 0) {
                $localStorage.characters = [];
            }
            var newChar = createNewChar();
            $localStorage.characters.push(newChar);
            console.log($localStorage.characters);
            loadCharacters();
            $scope.showNew = false;
        }

        var createNewChar = function() {
            var createChar = {
                "id": new Date().getTime(),
                "game": "ds",
                "favorite": false,
                "name": $scope.newName,
                "race": $scope.newRace,
                "class": $scope.newClass,
                "lvl": $scope.newLvl,
                "experience": $scope.newExperience,
                "info": {
                    "sex": $scope.newSex,
                    "birtplace": $scope.newBirthplace,
                    "birthday": $scope.newBirthday,
                    "age": $scope.newAge,
                    "height": $scope.newHeight,
                    "weight": $scope.newWeight,
                    "hair": $scope.newHair,
                    "eyes": $scope.newEyes,
                    "special": $scope.newSpecial,
                    "languages": $scope.newLanguages,
                    "writing": $scope.newWriting
                },
                "attributes": {
                    "body": $scope.newBody,
                    "agility": $scope.newAgility,
                    "spirit": $scope.newSpirit
                },
                "traits": {
                    "strength": $scope.newStrength,
                    "hardness": $scope.newHardness,
                    "movement": $scope.newMovement,
                    "dexterity": $scope.newDexterity,
                    "mind": $scope.newMind,
                    "aura": $scope.newAura
                },
                "notes": $scope.newNotes
            };
            return createChar;
        };

        $scope.showCharacter = function(id) {

        }

        $scope.removeCharacter = function(id) {
            for (var i = 0; i < $localStorage.characters.length; i++) {
                if($localStorage.characters[i].id == id) {
                    $localStorage.characters.splice(i,1);
                    loadCharacters();
                    return true;
                }
            }
        }

        $scope.addFavorite = function(id) {
            for (var i = 0; i < $localStorage.characters.length; i++) {
                if($localStorage.characters[i].id == id) {
                    $localStorage.characters[i].favorite = true;
                }
            }
        }

        loadCharacters();
        /*$scope.redirectToTimeline = function() {
         $location.path('/timeline');
         };

         $scope.redirectToMaps = function() {
         $location.path('/maps');
         };*/

    }]);