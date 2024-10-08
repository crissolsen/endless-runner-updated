input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.X, -1)
})
function gameEnd () {
    music.stopAllSounds()
    for (let index = 0; index < 8; index++) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    game.gameOver()
}
function gameLoop () {
    Obstacle1 = game.createSprite(randint(0, 4), 0)
    Obstacle2 = game.createSprite(randint(0, 4), 0)
    Obstacle3 = game.createSprite(randint(0, 4), 0)
    Obstacle4 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Obstacle1.change(LedSpriteProperty.Y, 1)
        Obstacle2.change(LedSpriteProperty.Y, 1)
        Obstacle3.change(LedSpriteProperty.Y, 1)
        Obstacle4.change(LedSpriteProperty.Y, 1)
        if (Obstacle1.isTouching(bird)) {
            gameEnd()
        } else if (Obstacle2.isTouching(bird)) {
            gameEnd()
        } else if (Obstacle3.isTouching(bird)) {
            gameEnd()
        } else if (Obstacle3.isTouching(bird)) {
            gameEnd()
        }
        if (Obstacle1.get(LedSpriteProperty.Y) == 4) {
            music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            game.addScore(1)
        }
        basic.pause(speed)
    }
    if (game.score() == 2) {
        speed += -200
    }
    Obstacle1.delete()
    Obstacle2.delete()
    Obstacle3.delete()
    Obstacle4.delete()
}
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let Obstacle4: game.LedSprite = null
let Obstacle3: game.LedSprite = null
let Obstacle2: game.LedSprite = null
let Obstacle1: game.LedSprite = null
let bird: game.LedSprite = null
let speed = 0
speed = 500
bird = game.createSprite(2, 4)
bird.set(LedSpriteProperty.Blink, 8)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.LoopingInBackground)
music.setVolume(50)
basic.forever(function () {
    gameLoop()
})
