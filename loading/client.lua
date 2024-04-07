-- VARIABLES
local ClientLoadESX = false

-- LOADING PLAYER HANDLER
AddEventHandler("playerSpawned", function ()
    if not ClientLoadESX then
        ShutdownLoadingScreenNui()
        ClientLoadESX = true
        DoScreenFadeOut(0)
        Wait(3000)
        DoScreenFadeIn(1000)
    end
end)