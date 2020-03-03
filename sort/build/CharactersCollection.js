"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterCollections = /** @class */ (function () {
    function CharacterCollections(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CharacterCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharacterCollections.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    };
    return CharacterCollections;
}());
exports.CharacterCollections = CharacterCollections;
