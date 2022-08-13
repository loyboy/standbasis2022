import ability from './ability'

export const canNavigate = to => to.matched.some(route => {
    // console.log(route.meta.resource)
    return ability.can(route.meta.action || 'read', route.meta.resource)
})

export const _ = undefined