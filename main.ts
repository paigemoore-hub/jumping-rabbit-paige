controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    she_the_birthday.vy = -100
})
let she_the_birthday: Sprite = null
scene.setBackgroundColor(11)
she_the_birthday = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f . . 
    . . . . f f f f f f f f 3 f . . 
    . . . f f f f f f f f f f f . . 
    . . . f f f f f f f f f f . . . 
    . . f . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(she_the_birthday, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
she_the_birthday.ay = 200
scene.cameraFollowSprite(she_the_birthday)
